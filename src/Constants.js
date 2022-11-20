const MESSAGE_PROCESS = Object.freeze({
    GAME_START: "다리 건너기 게임을 시작합니다.\n",
    INPUT_BRIDGE_LENGTH: "다리의 길이를 입력해주세요.\n",
    INPUT_MOVING: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
    INPUT_GAME_COMMAND: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n"
});

const MESSAGE_ERROR = Object.freeze({
    BRIDGE_ONLY_NUMBER: "[ERROR] 다리의 길이는 숫자로만 이루어져야 합니다.",
    BRIDGE_OUT_OF_RANGE: "[ERROR] 다리의 길이는 3 이상 20 이하의 숫자여야 합니다.",

    MOVING_ONLY_CHAR: "[ERROR] 이동할 위치는 한 자리 문자여야 합니다.",
    MOVING_ONLY_U_OR_D: "[ERROR] 이동할 위치는 U와 D 중 하나여야 합니다.",

    GAME_COMMAND_ONLY_CHAR: "[ERROR] 게임 명령어는 한 자리 문자여야 합니다.",
    GAME_COMMAND_ONLY_R_OR_Q: "[ERROR] 게임 명령어는 R와 Q 중 하나여야 합니다.",
});

const BRIDGE_SIZE_RANGE = Object.freeze({
    MIN: 3,
    MAX: 20
});

const MOVING = Object.freeze({
    UP: 'U',
    DOWN: 'D'
});

const GAME_COMMAND = Object.freeze({
    RETRY: 'R',
    QUIT: 'Q'
});

module.exports = {
    MESSAGE_PROCESS,
    MESSAGE_ERROR,
    BRIDGE_SIZE_RANGE,
    MOVING
};