/**
 * 'Never' - Type
 *      --> Function Which Never Return Anything Not Even 'undefined' Then This 'never' type should be used.
 */

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}
