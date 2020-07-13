function takeANumber(line, name)
{
  var counter = 0;
  line[counter] = name;
  counter++;
  return `Welcome, ${name}. You are number ${line.length} in line.`
}