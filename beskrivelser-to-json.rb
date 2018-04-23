require 'json'

lines = File.readlines("beskrivelser.txt").delete_if{|line| line.nil? || line == "\n" || line.start_with?("Stol")}


data = lines.map.with_index do |line,n|
  navn, beskrivelse = line.split(/\. /, 2)
  {
    stol: n + 1,
    navn: navn,
    beskrivelse: beskrivelse
  }
end

$stdout << JSON.pretty_generate(data)
