#!/bin/sh
#set -x
D="$(dirname "$0")"
BN="$(basename "$0")"

TARGET="$1"
test -n "${TARGET}" || TARGET=offline

test -d "${TARGET}" || mkdir "${TARGET}" || exit 1

for f in "${D}/"*; do
    test "$(basename "${f}")" = "${BN}" && continue
    test -f "${f}" && cp "${f}"  "${TARGET}/."
done

for u in $(grep '<script.*http' "${TARGET}/index.html"|grep -v '<!--.*<script'|grep -o 'src="http[^"]*"'|cut -d"=" -f2-|tr -d '"'); do
    BNU="$(basename "${u}")"
    rm -f "${TARGET}/${BNU}"
    ( cd "${TARGET}" && wget -q "${u}" )
    sed -i -e "s!${u}!${BNU}!g" "${TARGET}/index.html"
done

for u in $(grep '<link.*http' "${TARGET}/index.html"|grep -v '<!--.*<link'|grep -o 'href="http[^"]*"'|cut -d"=" -f2-|tr -d '"'); do
    BNU="$(basename "${u}")"
    rm -f "${TARGET}/${BNU}"
    ( cd "${TARGET}" && wget -q "${u}" )
    sed -i -e "s!${u}!${BNU}!g" "${TARGET}/index.html"
done

find "${TARGET}" -name "*~" -print0|xargs -0 rm
