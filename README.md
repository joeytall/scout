# Amazon Scout

# Requirements
Django 2.1 with Python3
`pip install requests pyquery`

## Install Live Reload (Optional)
`pip install django-livereload-server`
`python3 manager.py livereload`

## Start up server
`python3 manager.py runserver 1234`

# Featurse
1. Web Scrape Amazon product info if product not found in db.
2. Newly searched products will be added to DB automatically.
3. Table supports filter, sort, column resize/reorder.
4. Quick Link on ASIN opens up a new tab with amazon product page.
5. Existing product can be viewed in popup.
