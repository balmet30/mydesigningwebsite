## Installation

**Be sure to use the same version of the code as the version of the docs you're reading.**
You probably want the latest tagged version, but the default Git version is the master branch.

```shell
# clone the repository
$ https://github.com/balmet30/mydesigningwebsite.git
$ cd mydesigningwebsite
# checkout the correct version
$ git tag
```

Create a virtualenv and activate it:
```shell
$ python3 -m venv venv --without-pip
$ source venv/bin/activate
```

Install pip3 requirements
```shell
$ pip3 install -r requirements.txt
```

## Run
### Run Service on Flask
```shell
$ export FLASK_APP=ArchitectureX
# to run in developer mode
$ export FLASK_ENV=development
$ flask run
```

Open http://127.0.0.1:5000 in a browser.
