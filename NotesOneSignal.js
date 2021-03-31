// Step 1. In your AndroidManifest.xml, add android:launchMode="singleTask" as an attribute to your main activity
android:launchMode="singleTask"



// Step 2. At the very top of your Android project's app/build.gradle, add the following code to the very top of the file:
buildscript {
    repositories {
        maven { url 'https://plugins.gradle.org/m2/' } // Gradle Plugin Portal 
    }
    dependencies {
        classpath 'gradle.plugin.com.onesignal:onesignal-gradle-plugin:[0.12.9, 0.99.99]'
    }
}

apply plugin: 'com.onesignal.androidsdk.onesignal-gradle-plugin'



// Step 3. App.js
import OneSignal from 'react-native-onesignal'

useEffect(async() => {
    /* O N E S I G N A L   S E T U P */
    OneSignal.setAppId("75f0a044-a7bf-4e97-940b-cb24f61c0ee9"); // Didapat dari Dashboard OneSignal
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(false);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
        console.log("Prompt response:", response);
    });
  }, [])
