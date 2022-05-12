import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();

  // _(items) >> lodash wrapper objesi döner.
  // Böylelikle bütün lodash metotlarını sırayla (chaining) kullanabiliriz.
  // chain sonuna .value() metodu eklenerek wrapper objesi standart array'e geri döndürülür
}
