type ModifiersType = string | string[] | false | undefined | ModifiersType[];

export type ModifierProp<M extends string> = M | M[];

function generateModifierClassNameArray(baseClassName: string, ...modifiers: ModifiersType[]): string[] {
  let classNameArray: string[] = [];

  for (const modifier of modifiers) {
    if (Array.isArray(modifier)) {
      classNameArray = classNameArray.concat(generateModifierClassNameArray(baseClassName, ...modifier));
    } else if (typeof modifier === 'string' && modifier.length > 0) {
      classNameArray.push(baseClassName + '--' + modifier);
    }
  }

  return classNameArray;
}

/**
 * Generate `className` from base class name and modifiers, based on MindBEMing.
 * obtain classNames with necessary modifiers
 * @param baseClassName Class name of the element. You should contain element name if it's needed
 * @param modifiers Object of collection of modifiers. See ModifiersType for more details.
 * @returns `baseClassName baseClassName--modifier`
 */
export function mapModifiers(baseClassName: string, ...modifiers: ModifiersType[]): string {
  return (
    baseClassName +
    ' ' +
    generateModifierClassNameArray(baseClassName, ...modifiers)
      .join(' ')
      .trim()
  ).trim();
}

export const mapClassnames = (...arraysString: Array<string | boolean | undefined>): string | undefined => {
  return (
    arraysString
      .filter(item => !!item)
      .join(' ')
      .trim() || undefined
  );
};
