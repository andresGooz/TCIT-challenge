function implementsInterface(obj, interfaceDefinition) {
    for (const methodName of Object.keys(interfaceDefinition)) {
        if (typeof obj[methodName] !== 'function') {
            return methodName;
        }
    }
    return null;
}

function checkValidityPluggin(pluggin, interfaceDefinition) {
    const missingMethod = implementsInterface(pluggin, interfaceDefinition);
    if (missingMethod) {
        throw new Error(`The implementation does not satisfy the interface: missing method '${missingMethod}'`);
    }
}
module.exports  = checkValidityPluggin;