#!/bin/bash
folder_name=$1
tech=$2
location=$3
pwd=$(pwd)

mkdir $folder_name
cp -r $location/boilerplates/$tech/* $folder_name
touch $pwd/$1/.gitignore $pwd/$1/.env
git init $pwd/$1/