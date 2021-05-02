#!/bin/bash

cd ./proto \
&& protoc -I=. $(ls *.proto) --js_out=import_style=commonjs:./../proto-generated --grpc-web_out=import_style=typescript,mode=grpcwebtext:./../proto-generated