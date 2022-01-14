import stealRemovePlugin from '../src/index';

const code = `
foo = "bar";
//!steal-remove-start
// type checking should not throw in production
if(process.env.NODE_ENV === 'production') {
 foo = 'baz';
}
//!steal-remove-end
console.log(foo);
`;

describe('basic', () => {
  it('should remove steal-remove comment', () => {
    const plugin = stealRemovePlugin();
    // @ts-ignore
    const {code: newCode} = plugin.transform(code, 'test.js');
    expect(newCode).toBeDefined();
    expect(newCode).toContain('console.log(foo);');
    expect(newCode).not.toContain('//!steal-remove-start');
  });

  it('should not overwrite foo\'s value', () => {
    const plugin = stealRemovePlugin();
    // @ts-ignore
    const {code: newCode} = plugin.transform(code, 'test.js');
    let foo;
    eval(newCode);
    expect(foo).toEqual('bar');
  });

  it('should not transform if no javascript file is passed through', () => {
    const plugin = stealRemovePlugin();
    // @ts-ignore
    const file = plugin.transform('var no = "code" // here', 'test.stache');
    expect(file).toBeNull();
  });
})
