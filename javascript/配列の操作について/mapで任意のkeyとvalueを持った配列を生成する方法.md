let wrappedArray = this.state.itemList.map(obj => {
    let rObj = {}
    rObj["carryInApplicationId"] = Number(obj.carryInApplicationId)
    rObj["continue"] = obj.countinue
    rObj["count"] = obj.count
    return rObj
 })
  console.log(wrappedArray)