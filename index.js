function takeANumber(line, name)
{
  
// adds name(s) to line array  
  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`;
  
}

function nowServing(line)
{
  
  if (line.length === 0)
  {
    
    return "There is nobody waiting to be served!";
  
    
  }
  
// need this variable to preserve array item we're about to remove
  var serving = line[0];
  
// removes first item in array
  line.shift();

  return `Currently serving ${serving}.`;
  
}

function currentLine(line)
{
  if (line.length === 0)
  {
    return "The line is currently empty."
  }
  
  var status = "The line is currently:"
  
  for (let i = 0; i < line.length - 1; i++)
  {
    status = status.concat(` ${i + 1}. ${line[i]},`);
  }
  
  status = status.concat(` ${line.length}. ${line[line.length-1]}`);
  
  return status;  
}