#!/bin/bash
yarn "lint" ; yarn "start" ; yarn "test" ; exec "$@";