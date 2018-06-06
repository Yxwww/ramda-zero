// checking out: http://randycoulman.com/blog/2016/02/16/using-ramda-with-redux/
import { evolve, assoc, not } from "ramda";

console.log(evolve({ complete: not }, { complete: true }));
