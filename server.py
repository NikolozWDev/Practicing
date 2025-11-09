added models in Basket page. model basket. new database

import codewars_test as test
from solution import alphabetic


def dotest(s, expected):
    test.assert_equals(alphabetic(s), expected)


@test.describe("Tests")
def test_group():
    @test.it("Sample tests")
    def test_case():
        for s, expected in [('asd', False), ('codewars', False), ('door', True), ('cell', True), ('z', True),
                            ('', True), ]:
            dotest(s, expected)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'masteruser',
        'PASSWORD': '12345678',
        'HOST': 'w3-django-project.cdxmgq9zqqlr.us-east-1.rds.amazonaws.com',
        'PORT': '5432'
    }
}


created CRUD operation easly
running server again
running server firstpro
generating structure
running
added JS in back-end
adding images and filefields for more settings
made changes in server and databases to login the user (logout to)
recognize all servers by adminPanel
settings, urls, views, templates, jinja and more features
added django
practicing back-end
python code
int code
back-end with servers

added another branch
instaled python
studying python syntax
