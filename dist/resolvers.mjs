import { k as kebabCase } from './shared/vite-plugin-uni-components.780ddff3.mjs';
import 'node:path';
import 'minimatch';
import 'resolve';
import '@antfu/utils';
import 'local-pkg';

function AnoResolver() {
  return {
    type: "component",
    resolve: (name) => {
      if (name.match(/^A[A-Z]/))
        return { name, from: `ano-ui/components/${name}/${name}.vue` };
    }
  };
}

function UniUIResolver() {
  return {
    type: "component",
    resolve: (name) => {
      if (name !== "UniLayout" && name.match(/^Uni[A-Z]/)) {
        const partialName = kebabCase(name);
        return {
          name,
          from: `@dcloudio/uni-ui/lib/${partialName}/${partialName}.vue`
        };
      }
    }
  };
}

function WotResolver() {
  return {
    type: "component",
    resolve: (name) => {
      if (name.match(/^Wd[A-Z]/)) {
        const compName = kebabCase(name);
        return {
          name,
          from: `wot-design-uni/components/${compName}/${compName}.vue`
        };
      }
    }
  };
}

export { AnoResolver, UniUIResolver, WotResolver };
