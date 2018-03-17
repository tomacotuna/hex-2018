import { StyleSheet } from 'react-native';

export default function (styles) {
    return function (Component) {
        Object.defineProperty(Component.prototype, 'styles', {
            enumerable: false,
            value: StyleSheet.create(styles)
        });
        return Component;
    };
}