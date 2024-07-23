//concatenate method in javascript to create a sentence
function Quote() {
    var part_1 = "The trees are in their autumn beauty,";
    var part_2 = "The woodland paths are dry, ";
    var part_3 = "Under the October twilight the water ";
    var part_4 = "Mirrors a still sky; ";
    var part_5 = "Upon the brimming water among the stones ";
    var part_6 = "Are nine-and-fifty swans.";
    var verse = part_1.concat(part_2, part_3, part_4, part_5, part_6);
    document.getElementById("Concatenate") .innerHTML = verse;s
}
function slice_Method() {
    var Sentence = "Do or do not! There is no try.";
    var Section = Sentence.slice(5,4);
    document.getElementById("Slice").innerHTML = Section;
}