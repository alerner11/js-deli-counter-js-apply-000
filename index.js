function takeANumber(line, name)
{
  var counter = 0;
  line[counter] = name;
  return `Welcome, ${name}. You are number ${line.length + 1} in line.`
}