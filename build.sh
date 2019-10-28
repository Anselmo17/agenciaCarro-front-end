#!/bin/bash

set -e
if [ -z "${1}" ] ; then
  build_target="build"
else
  build_target="build:${1}"
fi

echo "build_target: ${build_target}"

npm install
npm run ${build_target}
chmod 777 dist -R
