// JavaScript - Demo theme
function func(param) {
  let text = "string_";
  const demo = `One Dark+ Theme ${param}`;
  for (let i = 0; i < param.length; i++) {
    text += param[i];
  }
  console.log(demo);
  return {
    text: text,
    boolean: false,
    demo
  };
}
func("fsdevon");
