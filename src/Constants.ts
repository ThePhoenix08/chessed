// Axes
export const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
export const horizontalAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// Piece Interface
export interface Piece {
  image: string
  x: number
  y: number
  type: PieceType
  team: TeamType
  enPassant?: boolean
}

// PieceType enum
export enum PieceType {
  PAWN,
  BISHOP,
  KNIGHT,
  ROOK,
  QUEEN,
  KING,
}

// TeamType enum
export enum TeamType {
  RED,
  BLUE,
  YELLOW,
  GREEN,
}

// InitialBoardState
export const initialBoardState: Piece[] = [
  // Red Pieces
  {
    image: `assets/images/rR.png`,
    x: 3,
    y: 0,
    type: PieceType.ROOK,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rN.png`,
    x: 4,
    y: 0,
    type: PieceType.KNIGHT,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rB.png`,
    x: 5,
    y: 0,
    type: PieceType.BISHOP,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rQ.png`,
    x: 6,
    y: 0,
    type: PieceType.QUEEN,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rK.png`,
    x: 7,
    y: 0,
    type: PieceType.KING,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rB.png`,
    x: 8,
    y: 0,
    type: PieceType.BISHOP,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rN.png`,
    x: 9,
    y: 0,
    type: PieceType.KNIGHT,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rR.png`,
    x: 10,
    y: 0,
    type: PieceType.ROOK,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rP.png`,
    x: 3,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rP.png`,
    x: 4,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rP.png`,
    x: 5,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rP.png`,
    x: 6,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rP.png`,
    x: 7,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rP.png`,
    x: 8,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rP.png`,
    x: 9,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.RED,
  },
  {
    image: `assets/images/rP.png`,
    x: 10,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.RED,
  },

  // Yellow Pieces
  {
    image: `assets/images/yR.png`,
    x: 3,
    y: 13,
    type: PieceType.ROOK,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yN.png`,
    x: 4,
    y: 13,
    type: PieceType.KNIGHT,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yB.png`,
    x: 5,
    y: 13,
    type: PieceType.BISHOP,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yK.png`,
    x: 6,
    y: 13,
    type: PieceType.KING,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yQ.png`,
    x: 7,
    y: 13,
    type: PieceType.QUEEN,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yB.png`,
    x: 8,
    y: 13,
    type: PieceType.BISHOP,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yN.png`,
    x: 9,
    y: 13,
    type: PieceType.KNIGHT,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yR.png`,
    x: 10,
    y: 13,
    type: PieceType.ROOK,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yP.png`,
    x: 3,
    y: 12,
    type: PieceType.PAWN,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yP.png`,
    x: 4,
    y: 12,
    type: PieceType.PAWN,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yP.png`,
    x: 5,
    y: 12,
    type: PieceType.PAWN,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yP.png`,
    x: 6,
    y: 12,
    type: PieceType.PAWN,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yP.png`,
    x: 7,
    y: 12,
    type: PieceType.PAWN,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yP.png`,
    x: 8,
    y: 12,
    type: PieceType.PAWN,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yP.png`,
    x: 9,
    y: 12,
    type: PieceType.PAWN,
    team: TeamType.YELLOW,
  },
  {
    image: `assets/images/yP.png`,
    x: 10,
    y: 12,
    type: PieceType.PAWN,
    team: TeamType.YELLOW,
  },

  // BLUE Pieces
  {
    image: `assets/images/bR.png`,
    x: 0,
    y: 3,
    type: PieceType.ROOK,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bN.png`,
    x: 0,
    y: 4,
    type: PieceType.KNIGHT,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bB.png`,
    x: 0,
    y: 5,
    type: PieceType.BISHOP,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bQ.png`,
    x: 0,
    y: 6,
    type: PieceType.QUEEN,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bK.png`,
    x: 0,
    y: 7,
    type: PieceType.KING,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bB.png`,
    x: 0,
    y: 8,
    type: PieceType.BISHOP,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bN.png`,
    x: 0,
    y: 9,
    type: PieceType.KNIGHT,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bR.png`,
    x: 0,
    y: 10,
    type: PieceType.ROOK,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bP.png`,
    x: 1,
    y: 3,
    type: PieceType.PAWN,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bP.png`,
    x: 1,
    y: 4,
    type: PieceType.PAWN,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bP.png`,
    x: 1,
    y: 5,
    type: PieceType.PAWN,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bP.png`,
    x: 1,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bP.png`,
    x: 1,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bP.png`,
    x: 1,
    y: 8,
    type: PieceType.PAWN,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bP.png`,
    x: 1,
    y: 9,
    type: PieceType.PAWN,
    team: TeamType.BLUE,
  },
  {
    image: `assets/images/bP.png`,
    x: 1,
    y: 10,
    type: PieceType.PAWN,
    team: TeamType.BLUE,
  },

  // Green Pieces
  {
    image: `assets/images/gR.png`,
    x: 13,
    y: 3,
    type: PieceType.ROOK,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gN.png`,
    x: 13,
    y: 4,
    type: PieceType.KNIGHT,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gB.png`,
    x: 13,
    y: 5,
    type: PieceType.BISHOP,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gK.png`,
    x: 13,
    y: 6,
    type: PieceType.KING,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gQ.png`,
    x: 13,
    y: 7,
    type: PieceType.QUEEN,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gB.png`,
    x: 13,
    y: 8,
    type: PieceType.BISHOP,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gN.png`,
    x: 13,
    y: 9,
    type: PieceType.KNIGHT,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gR.png`,
    x: 13,
    y: 10,
    type: PieceType.ROOK,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gP.png`,
    x: 12,
    y: 3,
    type: PieceType.PAWN,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gP.png`,
    x: 12,
    y: 4,
    type: PieceType.PAWN,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gP.png`,
    x: 12,
    y: 5,
    type: PieceType.PAWN,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gP.png`,
    x: 12,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gP.png`,
    x: 12,
    y: 7,
    type: PieceType.PAWN,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gP.png`,
    x: 12,
    y: 8,
    type: PieceType.PAWN,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gP.png`,
    x: 12,
    y: 9,
    type: PieceType.PAWN,
    team: TeamType.GREEN,
  },
  {
    image: `assets/images/gP.png`,
    x: 12,
    y: 10,
    type: PieceType.PAWN,
    team: TeamType.GREEN,
  },
]
