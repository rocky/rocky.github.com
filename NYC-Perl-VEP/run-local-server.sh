#!/bin/bash
bs=${BASH_SOURCE[0]}
mydir=$(dirname $bs)
fulldir=$(readlink -f $mydir)
owd=$(pwd)
cd $fulldir
python3 -m http.server
cd $owd
