#!/bin/bash

if [ $# -lt 4 ]; then
    for arg in "$@"; do
        echo "$arg"
    done
else
    echo $1
    echo $2
    echo $3
fi