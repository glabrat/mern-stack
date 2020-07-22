#!/bin/bash          
name=$1

nest g mo $1 
nest g co $1 
nest g s $1
touch src/$1/$1.dto.ts
touch src/$1/$1.entity.ts