// 融合plugins
//      a) 新配置会融合老配置,发生冲突时,会以新配置为主
export const handleUtilsCoverPlugins = ({
    oldPlugins = [],
    newPlugins = [],
}) => {
    try {
        const resultObject = {};
        oldPlugins.forEach((item) => (resultObject[item.name] = item));
        newPlugins.forEach((item) => (resultObject[item.name] = item));

        return Object.values(resultObject);
    } catch {
        console.warn("handleUtilsCoverPlugins error");
        return oldPlugins;
    }
};
