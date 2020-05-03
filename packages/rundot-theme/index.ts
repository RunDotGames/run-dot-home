import pageBuilderTheme from "@webiny/app-page-builder-theme";
import { PbPageLayoutComponentPlugin, PbPageLayoutPlugin, PbThemePlugin, PbDefaultPagePlugin } from "@webiny/app-page-builder/types";
import { CustomHeader } from './custom-header';

export default (): (PbPageLayoutComponentPlugin | PbThemePlugin | PbPageLayoutPlugin | PbDefaultPagePlugin)[] => {
    const plugins = pageBuilderTheme();
    const headerPlugin = plugins.find((plugin) => plugin.name === 'pb-layout-component-header')
    
    if(headerPlugin == undefined){
        throw "unable to locate header"
    }
    (headerPlugin as PbPageLayoutComponentPlugin).component = CustomHeader
    return plugins
};