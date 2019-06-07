# Inato Take-Home Update note

## New Dependencies
- Add one new dependencie to babel plugin in order to enable class transformation
  for declaring a static const properties of a class within its scope 

## New Features
- Add a script file for executing the main process into the docker container.
  Now all command declared into the package node are executed
- The pharmacy class is now able to manage the "Dafalgan" drug

## Test
- All rules test has been implemented even for the dafalgan drug


## Bug fix
- Fix a bug when using docker compose, it was unable to run an app js on both windows & linux docker
