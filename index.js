function takeANumber(line, name)
{
  line.Append(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}