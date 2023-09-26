function sortNames( collection, inverted=false ) {
  if (inverted) {
    collection.sort((b, a) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
  } else {
    collection.sort((a, b) => {
        if (a.name > b.name) {
        return 1;
        }
        if (a.name < b.name) {
        return -1;
        }
        return 0;
    })
  }
}

export default sortNames