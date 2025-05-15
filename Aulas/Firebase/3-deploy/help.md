// Estrutura dos exemplos dividida por aulas

// Aula 1 - Firebase Auth + Firestore
// ... (mantido)

// Aula 2 - Firebase Storage, Analytics, Crashlytics, Remote Config
// ... (mantido)

// Aula 3 - Deploy, App Distribution, Remote Config em produção

// build.gradle (android/app): configurar versionamento e signing
android {
  defaultConfig {
    versionCode 2
    versionName "1.0.1"
  }

  signingConfigs {
    release {
      storeFile file("my-release-key.keystore")
      storePassword "senha"
      keyAlias "meualias"
      keyPassword "senhadachave"
    }
  }

  buildTypes {
    release {
      signingConfig signingConfigs.release
      minifyEnabled false
      proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
    }
  }
}

// Gerar APK ou AAB
// APK
npx react-native run-android --variant=release
// AAB para Play Store
cd android && ./gradlew bundleRelease

// Firebase App Distribution
// Instalar CLI
npm install -g firebase-tools
firebase login
firebase appdistribution:distribute app-release.apk \
  --app "APP_ID" \
  --groups "testadores"

// Uso de Remote Config para rollout
// Alterar comportamento conforme versão:
import remoteConfig from '@react-native-firebase/remote-config';

const verificarFeatureNova = async () => {
  await remoteConfig().fetchAndActivate();
  const featureAtiva = remoteConfig().getBoolean('nova_funcionalidade');
  return featureAtiva;
};