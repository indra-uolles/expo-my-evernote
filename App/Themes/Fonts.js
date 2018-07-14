const type = {
    base: 'Roboto-Regular',
    bold: 'Roboto-Bold',
    emphasis: 'HelveticaNeue-Italic'
};

const size = {
    h1: 16,
    input: 18,
    regular: 12,
    medium: 14,
    small: 12,
    tiny: 8.5
};

const style = {
    h1: {
        fontFamily: type.base,
        fontSize: size.h1
    },
    normal: {
        fontFamily: type.base,
        fontSize: size.regular
    },
    description: {
        fontFamily: type.base,
        fontSize: size.medium
    }
};

export default {
    type,
    size,
    style
};
