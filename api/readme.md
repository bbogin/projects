# Ben Bogin API

This is a read-only API that I built just to demonstrate a working knowledge of node.js/express.

### Documentation
Theoretically, this could be used with multiple people's resumes, though at the moment, only mine is available. However, I will still use `NAME` instead of `ben`.

To get a person's whole resume:

`bbogin.com/v1/NAME`


To get particular subsections, append the subsection name. The available options are:

`bbogin.com/v1/NAME/contact`

`bbogin.com/v1/NAME/experience`

`bbogin.com/v1/NAME/education`
