#!/usr/bin/env bash

set -e

VALID_COMMANDS=( "help" "create" "list" "devices" "start" )
COMMAND=""

devices() {
    avdmanager list device -c | grep -v Parsing
}

list() {
    emulator -list-avds
}

create() {
   local avd_name
   local device_name

    avd_name="$1"
    device_name="$2"

    if [[ -z "$avd_name" ]] || [[ -z "$device_name" ]]; then
        echo -e "ERROR: avd_name and/or device_name not specified\n"
        usage
    fi

    echo no | avdmanager create avd --force \
        --name "$avd_name" \
        --device "$device_name" \
        --abi google_apis/x86_64 \
        --package "system-images;android-28;google_apis;$(uname -m)"
}

start() {
    local avd_name="$1"

    if [[ -z "$avd_name" ]]; then
     echo -e "ERROR: avd_name not specified\n"
     usage
    fi

    $(which emulator) -avd "$avd_name" -camera-back webcam0 -partition-size 300 &
}

usage() {
cat <<EOF
Usage:

$0 <command> <args>

command : 'devices', 'list', 'start' or 'create'
args    : Name of the device for create

Create Example:
$(basename $0) create ourtestPixelDevice pixel

Start Example:
$(basename $0) start ourtestPixelDevice
EOF

exit 1
}

command_valid() {
    local command

    command="$1"

    [[ "${VALID_COMMANDS[*]}" =~ "$command" ]] && return 0
    return 1
}

parse_args() {
    [[ -z "$1" ]] && usage
    COMMAND="$1"
}

run_command() {
    [[ "$COMMAND" == "help" ]] && usage
    "$COMMAND" "${@:2}"
}

main() {
    parse_args "$@"
    set +e
    if command_valid "$COMMAND";then
        set -e
        run_command "$@"
    else
        echo "Invalid command: $COMMAND"
        exit 1
    fi
}

main "$@"
