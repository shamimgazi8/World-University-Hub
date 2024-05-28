const dataArrJobTyp: any = [];
export function MultiselectJobtyp(event: any, data: any) {
  const index = dataArrJobTyp?.indexOf(data);
  event.target.checked
    ? dataArrJobTyp.push(data)
    : dataArrJobTyp.splice(index, 1);

  const selectedString = dataArrJobTyp.toString();
  return selectedString;
}

const DataArrayAcamdey: any = [];
export function MultiselectAcademy(event: any, data: any) {
  const index = DataArrayAcamdey?.indexOf(data);
  event.target.checked
    ? DataArrayAcamdey.push(data)
    : DataArrayAcamdey.splice(index, 1);

  const selectedString = DataArrayAcamdey.toString();
  return selectedString;
}

const DataArrayContactTyp: any = [];
export function MultiselectContactTyp(event: any, data: any) {
  const index = DataArrayContactTyp?.indexOf(data);
  event.target.checked
    ? DataArrayContactTyp.push(data)
    : DataArrayContactTyp.splice(index, 1);

  const selectedString = DataArrayContactTyp.toString();
  return selectedString;
}

const DataArrayHour: any = [];
export function MultiselectHour(event: any, data: any) {
  const index = DataArrayHour?.indexOf(data);
  event.target.checked
    ? DataArrayHour.push(data)
    : DataArrayHour.splice(index, 1);

  const selectedString = DataArrayHour.toString();
  return selectedString;
}

const DataArrayRecruit: any = [];
export function MultiselectRecruit(event: any, data: any) {
  const index = DataArrayRecruit?.indexOf(data);
  event.target.checked
    ? DataArrayRecruit.push(data)
    : DataArrayRecruit.splice(index, 1);

  const selectedString = DataArrayRecruit.toString();
  return selectedString;
}

const DataArrayCountrySlug: any = [];
export function MultiselectCountry(data: any) {
  const index = DataArrayCountrySlug?.indexOf(data);
  data
    ? DataArrayCountrySlug.push(data)
    : DataArrayCountrySlug.splice(index, 1);

  const selectedString = DataArrayCountrySlug.toString();
  return selectedString;
}
