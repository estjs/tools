export function groupBuy<(collection,iteratee) {
  return tempData.reduce((group, groupName) => {
    const { category } = groupName;
    group[category] = group[category] ?? [];
    group[category].push(groupName);
    return group;
  }, {});
}
