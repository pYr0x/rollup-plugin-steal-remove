import {Plugin, SourceDescription} from 'rollup';

export default function stealRemovePlugin(): Plugin {
  return {
    name: 'stealRemove',

    transform(code: string, id: string): null | Partial<SourceDescription> {
      const [filename] = id.split('?', 2)

      if (filename.endsWith('.js')) {
        const tagRegEx = new RegExp(
          "(\\s?)//!(\\s?)steal-remove-start((.|\r?\n)*?)//!(\\s?)steal-remove-end",
          "gim"
        );

        return {
          code: code.replace(tagRegEx, "")
        };
      }
      return null;
    }
  }
}
