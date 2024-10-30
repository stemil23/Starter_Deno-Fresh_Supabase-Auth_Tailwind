#!/bin/bash

# Ensure environment variables are available
if [ -z "$EDGEDB_CLOUD_INSTANCE" ] || [ -z "$EDGEDB_CLOUD_KEY" ]; then
    echo "Error: EdgeDB environment variables are not set"
    exit 1
fi

# Generate EdgeDB TypeScript files with environment variables
EDGEDB_CLOUD_INSTANCE=$EDGEDB_CLOUD_INSTANCE EDGEDB_CLOUD_KEY=$EDGEDB_CLOUD_KEY deno task generate

# Run the normal Fresh build
deno task build