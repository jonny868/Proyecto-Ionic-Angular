/* eslint-disable @typescript-eslint/naming-convention */
export interface Question {
    response_code?: number;
    results?: [{
        category?: string;
        type?: string;
        difficulty?: string;
        question?: string;
        correct_answer?: string;
        incorrect_answers?: [];
    }];
};

