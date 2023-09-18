function formatName(name: string): string {
  return name.replace("Headphones", "").replace("Earphones", "").replace("Speaker", "");
}

export default formatName;
