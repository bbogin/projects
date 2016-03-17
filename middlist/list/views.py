from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from list.models import Category, Book, Bike, Dorm, Artwork
from list.forms import BookForm, ArtworkForm, DormForm, BikeForm

def index(request):
    # Query the database for a list of ALL categories currently stored.
    # Order the categories by no. likes in descending order.
    # Retrieve the top 5 only - or all if less than 5.
    # Place the list in our context_dict dictionary which will be passed to the template engine.
    category_list = Category.objects.order_by('name')[:5]
    context_dict = {'categories': category_list}

    # Render the response and send it back!
    return render(request, 'list/index.html', context_dict)

@login_required
def category(request, category_name_slug):

    # Create a context dictionary which we can pass to the template rendering engine.
    context_dict = {}

    try:
        # Can we find a category name slug with the given name?
        # If we can't, the .get() method raises a DoesNotExist exception.
        # So the .get() method returns one model instance or raises an exception.
        

        if category_name_slug=="bikes":
            items = Bike.objects.all()
            link = "/add_bike/"
            catid = 4
        elif category_name_slug=="books":
            items = Book.objects.all()
            link = "/add_book/"
            catid = 2
        elif category_name_slug=="dorm":
            items = Dorm.objects.all()
            link = "/add_dorm/"
            catid = 3
        elif category_name_slug=="artwork":
            items = Artwork.objects.all()
            link = "/add_artwork/"
            catid = 1

        # Adds our results list to the template context under name pages.
        context_dict['items'] = items
        context_dict['link'] = link
        category = Category.objects.get(id=catid)
        # We also add the category object from the database to the context dictionary.
        # We'll use this in the template to verify that the category exists.
        context_dict['category'] = category.name
    except Category.DoesNotExist:
        # We get here if we didn't find the specified category.
        # Don't do anything - the template displays the "no category" message for us.
        pass

    # Go render the response and return it to the client.
    return render(request, 'list/category.html', context_dict)


@login_required
def details(request, category_name_slug, itemid):

	context_dict = {}

        if category_name_slug=="bikes":
            item = Bike.objects.get(id=itemid)
        elif category_name_slug=="books":
            item = Book.objects.get(id=itemid)
        elif category_name_slug=="dorm":
            item = Dorm.objects.get(id=itemid)
        elif category_name_slug=="artwork":
            item = Artwork.objects.get(id=itemid)


        # item = Book.objects.get(id=1)

        context_dict['item'] = item
        context_dict['slug'] = category_name_slug
        context_dict['id'] = itemid

	return render(request, 'list/details.html', context_dict)


@login_required
def myaccount(request):

    context_dict = {}
    creator = User.objects.get(username=request.user)
    bikes = Bike.objects.filter(creator=creator)
    dorm = Dorm.objects.filter(creator=creator)
    artwork = Artwork.objects.filter(creator=creator)
    books = Book.objects.filter(creator=creator)

    context_dict['bikes'] = bikes
    context_dict['dorm'] = dorm
    context_dict['artwork'] = artwork
    context_dict['books'] = books

    return render(request, 'list/myaccount.html', context_dict)


@login_required
def deletepost(request, slug, itemid):
    itemcategory = Category.objects.get(slug=slug)

    if slug=="bikes":
        item = Bike.objects.get(id=itemid)
    elif slug=="books":
        item = Book.objects.get(id=itemid)
    elif slug=="dorm":
        item = Dorm.objects.get(id=itemid)
    elif slug=="artwork":
        item = Artwork.objects.get(id=itemid)

    item.delete()

    return HttpResponseRedirect('/myaccount/')




# FORMS




@login_required
def add_book(request):
    # A HTTP POST?
    if request.method == 'POST':
        form = BookForm(request.POST, request.FILES)

        if form.is_valid():
            newform = form.save(commit=False)
            newform.creator = User.objects.get(username=request.user)
            newform.save()

            # Now call the index() view.
            # The user will be shown the homepage.
            return index(request)
        else:
            # The supplied form contained errors - just print them to the terminal.
            print form.errors
    else:
        # If the request was not a POST, display the form to enter details.
        form = BookForm()

    # Bad form (or form details), no form supplied...
    # Render the form with error messages (if any).
    return render(request, 'list/add_book.html', {'form': form})

@login_required
def add_artwork(request):
    # A HTTP POST?
    if request.method == 'POST':
        form = ArtworkForm(request.POST, request.FILES)
        if form.is_valid():
            newform = form.save(commit=False)
            newform.creator = User.objects.get(username=request.user)
            newform.save()

            return index(request)
        else:
            print form.errors
    else:
        form = ArtworkForm()

    return render(request, 'list/add_artwork.html', {'form': form})

@login_required
def add_bike(request):
    # A HTTP POST?
    if request.method == 'POST':
        form = BikeForm(request.POST, request.FILES)

        if form.is_valid():
            newform = form.save(commit=False)
            newform.creator = User.objects.get(username=request.user)
            newform.save()

            return index(request)
        else:
            print form.errors
    else:
        form = BikeForm()

    return render(request, 'list/add_bike.html', {'form': form})

@login_required
def add_dorm(request):
    # A HTTP POST?
    if request.method == 'POST':
        form = DormForm(request.POST, request.FILES)

        if form.is_valid():
            newform = form.save(commit=False)
            newform.creator = User.objects.get(username=request.user)
            newform.save()

            return index(request)
        else:
            print form.errors
    else:
        form = DormForm()

    return render(request, 'list/add_dorm.html', {'form': form})













#login





def user_login(request):

    # If the request is a HTTP POST, try to pull out the relevant information.
    if request.method == 'POST':
        # Gather the username and password provided by the user.
        # This information is obtained from the login form.
                # We use request.POST.get('<variable>') as opposed to request.POST['<variable>'],
                # because the request.POST.get('<variable>') returns None, if the value does not exist,
                # while the request.POST['<variable>'] will raise key error exception
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Use Django's machinery to attempt to see if the username/password
        # combination is valid - a User object is returned if it is.
        user = authenticate(username=username, password=password)

        # If we have a User object, the details are correct.
        # If None (Python's way of representing the absence of a value), no user
        # with matching credentials was found.
        if user:
            # Is the account active? It could have been disabled.
            if user.is_active:
                # If the account is valid and active, we can log the user in.
                # We'll send the user back to the homepage.
                login(request, user)
                return HttpResponseRedirect('/')
            else:
                # An inactive account was used - no logging in!
                return HttpResponse("Your Account is disabled.")
        else:
            # Bad login details were provided. So we can't log the user in.
            print "Invalid login details: {0}, {1}".format(username, password)
            return HttpResponse("Invalid login details supplied.")

    # The request is not a HTTP POST, so display the login form.
    # This scenario would most likely be a HTTP GET.
    else:
        # No context variables to pass to the template system, hence the
        # blank dictionary object...
        return render(request, 'list/login.html', {})

@login_required
def user_logout(request):
    # Since we know the user is logged in, we can now just log them out.
    logout(request)

    # Take the user back to the homepage.
    return HttpResponseRedirect('/')