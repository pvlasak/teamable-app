function isInvalidEmail(userObject) {
    return !userObject.email.includes("@")
}

function isEmptyPayload(userObject) {
    return Object.keys(userObject).length === 0
}
module.exports = {
    isInvalidEmail,
    isEmptyPayload
}

test('valid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interests: "coding"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(false)
})

test('invalid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.email",
        interests: "coding"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(true)
})

test('empty payload', function() {
    const testPayload = {}
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(true)
})

test('non empty payload', function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interests: "coding"
    }
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(false)
})