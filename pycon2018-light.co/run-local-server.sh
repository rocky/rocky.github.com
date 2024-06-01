#!/bin/bash
# Runs a local HTTP server using the slides directory as the HTTP root.
bs=${BASH_SOURCE[0]}
set -e
mydir=$(dirname $bs)
fulldir=$(readlink -f $mydir)
local_server_owd=$(pwd)
cd $fulldir
python3 -m http.server $@
cd $local_server_owd
