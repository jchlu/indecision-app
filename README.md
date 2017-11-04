# indecision-app
Install instructions:    
* `brew update && brew upgrade node npm yarn`
* `yarn global add eslint live-server babel-cli`
* `yarn init`
* `yarn add babel-preset-react babel-preset-env #NOTE: no "global"`
* `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
* `live-server public`
* 