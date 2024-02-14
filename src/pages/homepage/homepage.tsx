
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SliderCarouselComponent from "../../components/SliderCarousel/SliderCarousel";
import Footer from "../../components/footer/footer";
import { Global } from "../../components/globalStyles";
import { Layout, LayoutWrapper } from "../PageStyles";
import ContactUsForm from "../../components/contactUsForm/contactUsForm";

const Homepage = () => {
    return ( 
        <>
		<LayoutWrapper>
            <NavBar />
		<Layout>
            <Global />
            <SliderCarouselComponent />
			<ContactUsForm />
		</Layout>
           <Footer />
		</LayoutWrapper>
		 
        </>
     );
}

export default Homepage;


/*
{
  "name": "clientside",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack serve --env mode=development",
    "build:dev": "webpack --env mode=development",
    "build:prod": "webpack --env mode=production",
    "build:mobile": "webpack --env mode=production --env platform=mobile",
    "build:desktop": "webpack --env mode=production --env platform=desktop",
    "lint": "eslint --fix src",
    "typecheck": "tsc"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^2.1.0",
    "axios": "^1.6.6",
    "formik": "^2.4.5",
    "jwt-decode": "^4.0.0",
    "mapbox-gl": "^3.1.2",
    "maplibre-gl": "^4.0.0",
    "proxy": "^2.1.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hot-loader": "^4.13.1",
    "react-map-gl": "^7.1.7",
    "react-redux": "^9.1.0",
    "react-router-dom": "6.16.0",
    "redux-deep-persist": "^1.0.7",
    "redux-persist": "^6.0.0",
    "redux-saga": "^1.3.0",
    "styled-components": "^6.1.8",
    "types": "^0.1.1"
  },
  "devDependencies": {
    "@babel/core": "^7.23.7",
    "@babel/preset-react": "^7.23.3",
    "@babel/preset-typescript": "^7.23.3",
    "@pmmmwh/react-refresh-webpack-plugin": "^0.5.11",
    "@svgr/webpack": "^8.1.0",
    "@types/babel__core": "^7.20.5",
    "@types/dotenv-webpack": "^7.0.7",
    "@types/lodash": "^4.14.202",
    "@types/node": "^20.11.6",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "@types/webpack": "^5.28.5",
    "@types/webpack-bundle-analyzer": "^4.6.3",
    "@types/webpack-dev-server": "^4.7.2",
    "@typescript-eslint/eslint-plugin": "^6.20.0",
    "babel-loader": "^9.1.3",
    "copy-webpack-plugin": "^12.0.2",
    "css-loader": "^6.9.1",
    "dotenv": "^16.4.0",
    "dotenv-webpack": "^8.0.1",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-config-standard-with-typescript": "^43.0.1",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-n": "^16.6.2",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-simple-import-sort": "^10.0.0",
    "file-loader": "^6.2.0",
    "fork-ts-checker-webpack-plugin": "^9.0.2",
    "html-webpack-plugin": "^5.6.0",
    "mini-css-extract-plugin": "^2.7.7",
    "react-refresh": "^0.14.0",
    "react-refresh-typescript": "^2.0.9",
    "sass": "^1.70.0",
    "sass-loader": "^14.0.0",
    "style-loader": "^3.3.4",
    "ts-loader": "^9.5.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3",
    "url-loader": "^4.1.1",
    "webpack": "^5.89.0",
    "webpack-bundle-analyzer": "^4.10.1",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  },
  "proxy": "http://localhost:5000"
}


*/
/*



<body>
   <div class="layout">
    <header>header</header>
    <main>main
      
</main>
    <footer>footer</footer>
   </div>
   <style>
    body{ 
        margin:  0;
    }
    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    header {
        height: 80px;
        background-color: red;
        flex-shrink: 0;
    }
    main {
        background-color: blue;
        flex-grow: 1;
    }
    footer {
        height: 100px;
        background-color: pink;
        flex-shrink: 0;
    }
   </style>
</body>
</html> 



*/
// yarn run lint
// yarn eslint --fix "src/**/*.tsx"

//  "strictNullChecks": true, tsconfig

/*
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["plugin:react/recommended", "standard-with-typescript", "prettier"],
	"overrides": [],
	"parserOptions": {
		"project": ["./tsconfig.json"],
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "@typescript-eslint", "simple-import-sort"],
	"rules": {
		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"simple-import-sort/exports": "error",
		"no-unmodified-loop-condition": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/triple-slash-reference": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"react/react-in-jsx-scope": "off",
	"import/order": [
			"error",
			{
				"pathGroups": [
					{
						"pattern": "react",
						"group": "external",
						"position": "before"
					},
					{
						"pattern": "@*",
						"group": "external",
						"position": "after"
					}
				],
				"pathGroupsExcludedImportTypes": ["react"],
				"newlines-between": "always",
				"groups": ["external", "builtin", "index", "sibling", "parent", "internal", "object", "type"]
			}
		] 
	}
}
*/