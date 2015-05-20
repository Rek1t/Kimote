#!/bin/bash

install () {
	if [ "$1" = android ]
	then
		chosen="Android"
	elif [ "$1" = ios ]
	then
		chosen="iOS"
	fi

	echo Installing for $chosen ...
	
	# Installation stage
	ionic start Kimote blank
	rm -r Kimote/www
	mv Kimote/* .
	rm -r Kimote
	echo Adding platform...
	ionic platform add $1
	echo Building project...
	# Build stage
	ionic build $1
}

echo --------------------------------------------------------
echo Kimote - A multi-platform remote application for Kodi 15
echo --------------------------------------------------------
echo VERSION 1.4.1 available at github.com/eftov/Kimote 
echo Kimote is currently available for Android and iOS
echo ""
echo Please choose 1 or 2 then hit ENTER:

options=("Android" "iOS")
select platform in "${options[@]}"
do
	case $platform in
		"Android" ) 
			install android
			cordova plugins add https://github.com/vstirbu/ZeroConf
			break
			;;
		"iOS" )
			install ios
			break
			;;
		* ) echo "Invalid option";;
	esac
done

echo Installation done
echo Please see README for more info

exit 0
