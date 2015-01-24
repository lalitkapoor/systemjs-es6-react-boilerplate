systemjs-es6-react-boilerplate
=========
A sample app in es6 making use of systemjs, react, jspm.

To run with docker:

```bash
docker build -t react-systemjs-es6-boilerplate .
docker run -d -p 80:80 --name test react-systemjs-es6-boilerplate
open http://$(boot2docker ip) #OSX
# open http://127.0.0.1 #OSX
```
