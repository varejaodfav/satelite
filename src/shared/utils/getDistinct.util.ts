export default function distinct(
  value: string,
  index: number,
  self: Array<string>,
): boolean {
  return self.indexOf(value) === index;
}
