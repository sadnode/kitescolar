
import { toast } from 'react-toastify';

export function Error(message: string) {
    return toast.error(message, {
        position: "bottom-center",
    });
}

export function Info(message: string) {
    return toast.info(message, {
        position: "bottom-center",
    });
}

export function Success(message: string) {
    return toast.success(message, {
        position: "bottom-center",
    });
}

export function Toast(message: string) {
    return toast(message, {
        position: "bottom-center",
    });
}

export function Dark(message: string) {
    return toast.dark(message, {
        position: "bottom-center",
    });
}